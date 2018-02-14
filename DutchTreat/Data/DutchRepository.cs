using DutchTreat.Data.Entities;
using Microsoft.EntityFrameworkCore;
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
        
        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems) => includeItems 
            ? _ctx.Orders.Include(o => o.Items).ThenInclude(i => i.Product).ToList() 
            : _ctx.Orders.ToList();
        

        public Order GetOrderById(int id)
        {
            return _ctx.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Product)
                .Where(o => o.Id == id)
                .FirstOrDefault();
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
