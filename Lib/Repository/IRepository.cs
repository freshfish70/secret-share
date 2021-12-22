using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace SecretShare.Lib.Repository
{
    public interface IRepository<TEntity>
    {
        IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = ""
        );

        TEntity GetByID(object id);

        void Insert(TEntity entity);

        void Update(TEntity entity);

        void Delete(object id);

        void Delete(TEntity entity);

    }
}