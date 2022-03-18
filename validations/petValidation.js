const{check, validationResult}=require('express-validator');

const generatePetValidators= ()=>[
    check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('type').isIn(['DOG','CAT']).notEmpty({max:50}).withMessage("Invalid type"),
    check('color').notEmpty().isLength({min:10,max:10}).withMessage("Invalid color"),
    check('notes').notEmpty().isLength({max:150}).withMessage("Invalid notes")
]

const updatePetValidators= () =>[
    check('alias').notEmpty().isLength({max:50}).withMessage("Invalid alias"),
    check('type').isIn(['DOG','CAT']).notEmpty({max:50}).withMessage("Invalid type"),
    check('color').optional().isLength({min:10,max:10}).withMessage("Invalid color"),
    check('notes').isLength({max:150}).withMessage("Invalid notes")
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
    generatePetValidators(),
    reporter
] ,
id: [
    generateIdValidators(),
    reporter
],
update: [
    updatePetValidators(),
    reporter
]

}
