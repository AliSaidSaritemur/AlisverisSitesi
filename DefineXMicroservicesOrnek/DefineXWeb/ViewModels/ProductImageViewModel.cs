using System.ComponentModel.DataAnnotations;

namespace DefineXWeb.ViewModels
{
    public class ProductImageViewModel
    {
        public int image_id { get; set; }
        public string alt { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}
