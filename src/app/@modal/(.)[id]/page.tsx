import Modal from "@/components/modal";
import wondersImages from "@/wonders";
import Image from "next/image";
function page({params} : {
    params : {
        id:string
    }
}) {
    const image = wondersImages.find((e) =>{
        return e.id==params.id
    })!
    
  return (
    <Modal>
        <Image src={image.src} alt={image.name}/>
    </Modal>
  )
}

export default page