/**
 * Created by guzi on 2016/5/27.
 * 中间件扩展模块
 */

exports.extendOutput = function (req, res, next) {
    function output (data) {

    }
    res.success = function (data) {
        output({
            errCode: 0,
            serverTime: 0,
            result: data
        })
    };
    res.error = function (err) {
        output({
            err_code: err.error_code,
            err_message: err.error_message
        })
    };

    next();
};

exports.errorHandle = function (err) {
     console.log(err)
};
