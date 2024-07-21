export default function SinglePhoto({params} : {
    params:{id:string}
}){
    return <div>Hello {params.id}</div>
}