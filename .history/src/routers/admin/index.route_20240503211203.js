const dashboardRoutes=require('./dashboard.route')
const productdRoutes=require('./products.route')
const productdCategoryRoutes=require('./products-category.route')
const rolesRoutes=require('./roles.route')
const accountsRoutes=require('./accounts.route')
const authRoutes=require('./auth.route')
const systemConfig=require('../../config/system')
function route(app){
    const PATH_ADMIN=systemConfig.prefixAdmin
    app.use( PATH_ADMIN+'/dashboard',dashboardRoutes)
    app.use( PATH_ADMIN+'/products',productdRoutes)
    app.use(PATH_ADMIN+'/products-category',productdCategoryRoutes)
    app.use(PATH_ADMIN+'/roles',rolesRoutes)
    app.use(PATH_ADMIN+'/accounts',accountsRoutes)
    app.use(PATH_ADMIN+'/auth',authRoutes)
}

module.exports = route