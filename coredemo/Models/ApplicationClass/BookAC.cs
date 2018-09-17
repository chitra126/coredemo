using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace coredemo.Models.ApplicationClass
{
    public class BookAC
    {
        [JsonProperty("BookId")]
        public int BookId { get; set; }

        [JsonProperty("Title")]
        public string Title { get; set; }

        [JsonProperty("Author")]
        public string Author { get; set; }

        [JsonProperty("Price")]
        public int Price { get; set; }
    }
}
