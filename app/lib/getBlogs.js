export async function getBlogs(){
    let res =await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
    let data =await res.json();

    return data
}