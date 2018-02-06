using DutchTreat.Data.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _ctx;
        private readonly ILogger<DutchRepository> _logger;

        public DutchRepository(DutchContext ctx, ILogger<DutchRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("Got all products");
                return _ctx.Products.OrderBy(x => x.Title).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all the products: {ex}");
                return null;
            }
        }

        public IEnumerable<Product> GetProductsByCategory(string category) => _ctx.Products.Where(x => x.Category == category).ToList();

        public bool SaveAll() => _ctx.SaveChanges() > 0;
    }
}
