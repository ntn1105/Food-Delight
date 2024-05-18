const dashboardRoutes=require('./dashboard.route')
const productdRoutes=require('./products.route')
const productdCategoryRoutes=require('./products-category.route')
const rolesRoutes=require('./roles.route')
const accountsRoutes=require('./accounts.route')
const authRoutes=require('./auth.route')
const systemConfig=require('../../config/system')
const authMiddleware=require("../../middlwares/admin/auth")
function route(app){
    const PATH_ADMIN=systemConfig.prefixAdmin
    app.use( PATH_ADMIN+'/dashboard',authMiddleware.requireAuth,dashboardRoutes)
    app.use( PATH_ADMIN+'/products',authMiddleware.requireAuth,productdRoutes)
    app.use(PATH_ADMIN+'/products-category',authMiddleware.requireAuth,productdCategoryRoutes)
    app.use(PATH_ADMIN+'/roles',authMiddleware.requireAuth,rolesRoutes)
    app.use(PATH_ADMIN+'/accounts',authMiddleware.requireAuth,accountsRoutes)
    app.use(PATH_ADMIN+'/auth',authRoutes)
}

module.exports = route