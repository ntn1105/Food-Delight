const dashboardRoutes=require('./dashboard.route')
const productdRoutes=require('./products.route')
const productdCategoryRoutes=require('./products-category.route')
const systemConfig=require('../../config/system')
function route(app){
    const PATH_ADMIN=systemConfig.prefixAdmin
    app.use( PATH_ADMIN+'/dashboard',dashboardRoutes)
    app.use( PATH_ADMIN+'/products',productdRoutes)
    app.use(PATH_ADMIN+'products-category',productdCategoryRoutes)
}

module.exports = route