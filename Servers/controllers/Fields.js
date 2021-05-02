const Fields = require('../model/Fields')

module.exports ={
    index:(req,res)=>{
        Fields.find({})
        .then(Messages => {
            res.json(Messages)
        })
        .catch(error => {
            res.json({error:error})
        })
    },
    show:(req,res)=>{
        Fields.find({title : req.params.title})
        .then(Messages => {
            res.json(Messages)
        })
        .catch(error => {
            res.json({error:error})
        })
    },
    create:(req,res)=>{
        let field = new Fields({
            title : req.body.title,
            description : req.body.description,
            image: req.body.image,
            icon: req.body.icon,
            colorThem: req.body.colorThem
        })
        field.save((error)=>{
            if(error)
            res.json({error:error})
            else
            res.json({message: "تم اضافة المجال بنجاح .."})
        })
    },
    delete:(req,res)=>{
        console.log(work)
        Fields.deleteOne({title: req.params.title})
        .then(Messages => {
            res.json("تم حذف المجال بنجاح ...")
        })
        .catch(error => {
            res.json({error:error})
        })
    },
    update:(req,res)=>{
        let FieldID =  {"title" : req.params.title}
        let newData = {
            title : req.body.title,
            description : req.body.description,
            image: req.body.image,
            icon : req.body.icon,
            colorThem: req.body.colorThem
        }
        console.log(newData)
        Fields.updateOne(FieldID , {$set: newData})
        .then(Messages => {
            res.json( {Messages : "تم تحديث البيانات"})
        })
        .catch(error => {
            res.json({error:error})
        })
    }
    //-------------------------------------------
}