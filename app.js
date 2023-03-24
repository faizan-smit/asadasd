
var olx = [
    {
        p_id: 1,
        p_prce: "24$",
        p_image: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
    }
]

olx.forEach(function foo(a){
    var mysrc = a.p_image
    a1 = document.createElement("img").src = "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
    // document.getElementById('img1').src = a.p_image
    document.write("<br>","Product ID: ", a.p_id, " Price: ", a.p_prce)
})