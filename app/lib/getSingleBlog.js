export async function getSingleBlog(id){
    let res =await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    let data =await res.json();

    return data
}