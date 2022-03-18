const{check, validationResult}=require('express-validator');

const generateUserValidators= ()=>[
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10,max:10}).withMessage("Invalid phone"),
    check('address').notEmpty().isLength({max:150}).withMessage("Invalid address")
]

const updateUserValidators= () =>[
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name"),
    check('lastname').isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').optional().isLength({min:10,max:10}).withMessage("Invalid phone"),
    check('address').isLength({max:150}).withMessage("Invalid address")
]
const generateIdValidators=()=>[
    check('id').notEmpty().isNumeric().withMessage("ivalid id")
]

const reporter = (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            "success":false,
            "code": 400,
            "message": errors,
            "data":[]

        })
    }
    next();
}


module.exports={
    add: [
    generateUserValidators(),
    reporter
] ,
id: [
    generateIdValidators(),
    reporter
],
update: [
    updateUserValidators(),
    reporter
]

}
