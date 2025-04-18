﻿using System.ComponentModel.DataAnnotations;

namespace DefineX.Services.ProductAPI.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string Title { get; set; }
        [Range(1, 1000)]
        public string Description { get; set; }
        public string Type { get; set; }
        public string Brand{ get; set; }
        public string CategoryName { get; set; }
        public string[] Collection { get; set; }
        public double Price { get; set; }
        public string[] tags { get; set; }
        public int stock { get; set; }
        public bool IsHot { get; set; } = false;
        public string discount { get; set; } = "0%";
        public bool IsNew { get; set; } = true;
   
    }

}
