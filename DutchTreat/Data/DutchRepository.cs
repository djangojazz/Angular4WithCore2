using DutchTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _ctx;

        public DutchRepository(DutchContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Product> GetAllProducts() => _ctx.Products.OrderBy(x => x.Title).ToList();

        public IEnumerable<Product> GetProductsByCategory(string category) => _ctx.Products.Where(x => x.Category == category).ToList();

        public bool SaveAll() => _ctx.SaveChanges() > 0;
    }
}
