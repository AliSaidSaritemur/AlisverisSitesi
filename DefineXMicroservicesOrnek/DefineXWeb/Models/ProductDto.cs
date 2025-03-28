using DefineXWeb.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace DefineXWeb.Models
{
    public class ProductDto
    {
        public int id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public string CategoryName { get; set; }
        public string[] Collection { get; set; }
        public double Price { get; set; }
        public string[] Tags { get; set; }
        public bool IsHot { get; set; }
        public string Discount { get; set; }
        public bool IsNew { get; set; }
        public VariantViewModel[] Variants { get; set; }
        public ProductImageViewModel[] Images { get; set; }
    }
}
