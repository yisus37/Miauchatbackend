import { Schema,model,Types } from "mongoose"

export interface IUsuarioModel{
    uid?:Types.ObjectId|string,
    username:string,
    nombres:string,
    apellidos:string,
    email:string,
    password?:string,
    isOnline:boolean
}
const UsuarioSchema=new Schema<IUsuarioModel>({
    nombres:{type:String,required:true},
    username:{type:String,required:true},
    apellidos:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isOnline:{type:Boolean,required:true},
})
UsuarioSchema.method('toJSON', function() {
    const {  _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});
const UsuarioModel=model<IUsuarioModel>("Usuario",UsuarioSchema)
