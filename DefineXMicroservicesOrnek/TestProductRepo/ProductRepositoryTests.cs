
using Microsoft.EntityFrameworkCore;
using DefineX.Services.ProductAPI.Repository;
using DefineX.Services.ProductAPI.dto;
using DefineX.Services.ProductAPI.dbcontexts;
using DefineX.Services.ProductAPI.Models;
using DefineX.Services.ProductAPI;

public class ProductRepositoryTests
{
    private readonly ApplicationDbContext context;
    private readonly ProductRepository _repository;

    public ProductRepositoryTests()
    {
        DbContextOptionsBuilder<ApplicationDbContext> dbOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
      .UseInMemoryDatabase(
          Guid.NewGuid().ToString() // Her test için farklı bir veritabanı kullan
      );

        context = new ApplicationDbContext(dbOptions.Options);
        _repository=new ProductRepository(context, MappingConfig.RegisterMaps().CreateMapper());

        // Test için sahte ürünler ekleyelim
        context.Products.Add(new Product
        {
            id = 112312,
            Title = "TestProduct",
            Description = "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            Type = "fashion",
            Brand = "nike",
            CategoryName = "Women",
            Collection = new[] { "YENİ GELEN ÜRÜNLER" },
            Price = 145,
            tags = new[] { "new", "s", "m", "yellow", "white" },
            IsHot = true,
            discount = "40",
            IsNew = true
        });
        context.Products.Add(new Product
        {
            id = 23213,
            Title = "T-Shirt Form Girls",
            Description = "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            Type = "fashion",
            Brand = "geox",
            CategoryName = "Women",
            Collection = new[] { "TREND" },
            Price = 185,
            tags = new[] { "s", "m", "l", "olive", "navy" },
            IsHot = false,
            discount = "40",
            IsNew = false
        });
        context.SaveChanges();
    }

    [Fact]
    public async Task GetProducts_ShouldReturnAllProducts()
    {


        var result = await _repository.GetProducts();


        Assert.NotNull(result);
        Assert.Equal(2, result.Count());
    }

    [Fact]
    public async Task GetProductById_ShouldReturnCorrectProduct()
    {

        var result = await _repository.GetProductById(112312);


        Assert.NotNull(result);
        Assert.Equal("TestProduct", result.Title);
    }

    [Fact]
    public async Task CreateUpdateProduct_ShouldAddNewProduct()
    {

        // Arrange
        var newProduct = new ProductDto
        {
            Title = "NewProduct",
            Description = "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitoraccumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            Type = "fashion",
            Brand = "nike",
            CategoryName = "Women",
            Collection = new[] { "featured products" },
            Price = 174,
            Tags = new[] { "nike", "l", "m", "red", "black" },
            IsHot = false,
            Discount = "20",
            IsNew = true,
            Variants = new Variant[] {
                new Variant { sku = "123", color = "red", size = "m"  },
                new Variant { sku = "124", color = "black", size = "l" }
            },
            Images = new ProductImage[] {
                new ProductImage { alt = "NewProductImage" },
                  new ProductImage { alt = "NewProductImage2" }

            }
        };


        var result = await _repository.CreateUpdateProduct(newProduct);
        var allProducts = await _repository.GetProducts();

        Assert.Equal("NewProduct", result.Title);
        Assert.Equal(3, allProducts.Count()); // Yeni ürün eklendi mi?
    }

    [Fact]
    public async Task DeleteProduct_ShouldRemoveProduct()
    {

        var result = await _repository.DeleteProduct(23213);
        var allProducts = await _repository.GetProducts();


        Assert.True(result);
        Assert.Equal(1, allProducts.Count());
    }
}