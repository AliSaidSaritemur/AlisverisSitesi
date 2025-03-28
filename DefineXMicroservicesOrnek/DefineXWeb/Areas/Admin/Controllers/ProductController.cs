using DefineXWeb.Models;
using DefineXWeb.Services.IServices;
using DefineXWeb.ViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DefineXWeb.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductController : Controller
    {

        private readonly IProductService _productService;
        public IWebHostEnvironment _environment;
        public ProductController(IProductService productService, IWebHostEnvironment environment)
        {
            _productService = productService;
            _environment = environment;
        }

        public async Task<IActionResult> ProductIndex()
        {
            List<ProductDto> list = new();
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var response = await _productService.GetAllProductsAsync<ResponseDto>(accessToken);
            if (response != null && response.IsSuccess)
            {
                list = JsonConvert.DeserializeObject<List<ProductDto>>(Convert.ToString(response.Result));
            }
            return View(list);
        }

        public async Task<IActionResult> ProductCreate()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ProductCreate(ProductViewModel model)
        {
            if (ModelState.IsValid)
              {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
       
            ProductDto productDto = new ProductDto
            {
                Title = model.Title,
                Description = model.Description,
                Type = model.Type,
                Brand = model.Brand,
                CategoryName = model.CategoryName,
                Collection = model.Collection[0].Split(','),
                Price = model.Price,
                Tags = model.Tags[0].Split(','),
                IsHot = false,
                Discount = model.Discount,
                IsNew = true,
                Variants= model.Variants,
                Images = model.Images
            };


            var response = await _productService.CreateProductAsync<ResponseDto>(productDto, accessToken);
            if (response != null && response.IsSuccess)
            {

                    ProductDto productResponse = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(response.Result));

                SaveImageAsync(model.Images[0].ImageFile, productResponse.Images[0].image_id);
                SaveImageAsync(model.Images[1].ImageFile, productResponse.Images[1].image_id);
                return RedirectToAction(nameof(ProductIndex));

            }
            }
            TempData["ErrorMessage"] = "Lütfen Formun tamamını doldurunuz...";
            return View(model);
        }

        public async Task SaveImageAsync(IFormFile imageFile,int imageId)
        {
            string targetDir = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, @"..\andshop-vue\assets\img\product-image");

  
            string finalPath = Path.GetFullPath(targetDir);


            if (!Directory.Exists(finalPath))
            {
                Directory.CreateDirectory(finalPath);
            }

            string fileName = imageId+".png";

            string filePath = Path.Combine(finalPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

        }



        public async Task<IActionResult> ProductEdit(int productId)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var response = await _productService.GetProductByIdAsync<ResponseDto>(productId, accessToken);
            if (response != null && response.IsSuccess)
            {
                ProductDto model = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(response.Result));

                ProductViewModel productViewModel = new ProductViewModel
                {
                    id = model.id,
                    Title = model.Title,
                    Description = model.Description,
                    Type = model.Type,
                    Brand = model.Brand,
                    CategoryName = model.CategoryName,
                    Collection = model.Collection,
                    Price = model.Price,
                    Tags = model.Tags,
                    IsHot = false,
                    Discount = model.Discount,
                    IsNew = true,
                    Variants = model.Variants,
                    Images = model.Images
                };


                return View(productViewModel);
            }
            return NotFound();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ProductEdit(ProductViewModel model)
        {
            ModelState.Remove("Images[0].ImageFile");
            ModelState.Remove("Images[1].ImageFile");
            if (ModelState.IsValid)
            {
                var accessToken = await HttpContext.GetTokenAsync("access_token");

                ProductDto productDto = new ProductDto
                {
                    id = model.id,
                    Title = model.Title,
                    Description = model.Description,
                    Type = model.Type,
                    Brand = model.Brand,
                    CategoryName = model.CategoryName,
                    Collection = model.Collection[0].Split(','),
                    Price = model.Price,
                    Tags = model.Tags[0].Split(','),
                    IsHot = model.IsHot,
                    Discount = model.Discount,
                    IsNew = model.IsNew,
                    Variants = model.Variants,
                    Images = model.Images
                };

                var response = await _productService.UpdateProductAsync<ResponseDto>(productDto, accessToken);
                if (response != null && response.IsSuccess)
                {
                    ProductDto productResponse = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(response.Result));

                    if(model.Images[0].ImageFile!=null)
                    SaveImageAsync(model.Images[0].ImageFile, productResponse.Images[0].image_id);
                    if (model.Images[1].ImageFile != null)
                        SaveImageAsync(model.Images[1].ImageFile, productResponse.Images[1].image_id);
                    return RedirectToAction(nameof(ProductIndex));
                }
            }
            TempData["ErrorMessage"] = "Lütfen Formun tamamını doldurunuz...";
            return View(model);
        }




        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> ProductDelete(int productId)
        {
            if (productId == null)
            {
                return NotFound();
            }

            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var responseGetProduct = await _productService.GetProductByIdAsync<ResponseDto>(productId, accessToken);
            ProductDto model = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(responseGetProduct.Result));

            var silinecekUrun = await _productService.GetProductByIdAsync<ResponseDto>(productId, accessToken);

            if (silinecekUrun != null && silinecekUrun.IsSuccess)
            {
                ProductDto silinecekProductDto = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(silinecekUrun.Result));
            }
            var response = await _productService.DeleteProductAsync<ResponseDto>(productId, accessToken);
            if (response.IsSuccess)
            {
                DeleteFileImage(model.Images[0].image_id);
                DeleteFileImage(model.Images[1].image_id);

                var responseImage = await _productService.GetProductByIdAsync<ResponseDto>(productId, accessToken);

                return RedirectToAction(nameof(ProductIndex));
            }
            return RedirectToAction(nameof(ProductIndex));
        }

        public void DeleteFileImage(int imageId)
        {
            try
            {
                string targetDir = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, @"..\andshop-vue\assets\img\product-image");


                string finalPath = Path.GetFullPath(targetDir);


                string fileName = imageId + ".png";


                string filePath = Path.Combine(finalPath, fileName);

    
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                    return ; 
                }
                return ; 
            }
            catch (Exception ex)
            {
                Console.WriteLine("Dosya silinirken hata oluştu: " + ex.Message);
                return ;
            }
        }


    }
}
