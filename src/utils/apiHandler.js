const emailOrUserName ="ankur@cft.com"
const password = "Pass@123"

const getData =async(email,pass)=>{
    const result =await new Promise((resolve,reject)=>{
        if(emailOrUserName ===email && password ===pass){
            return resolve(true)
        }else{
            return reject(false)
        }
    })
    return result
}
export default getData