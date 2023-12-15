let GetHome = (req, res) => {
    // res.send("Welcome to home page")
    // sending json and status

    console.log(req.params)

    let x = req.params.name
    if (x == "amey") {
        res.status(200).json({ "message": `Hello ${x} ! welcome to home route.`})
    }else{
       res.status(400).json({ "message": `you dont have access to this content`})
    }
}

let PostHome = (req, res) => {
    console.log(req.body)
    res.status(201).json({ "message": "you have posted in home route" })
}

let GetServices = (req, res) => {
    res.status(200).json({ "message": "welcome to services route" })
}

let PostServices = (req, res) => {
    console.log(req.body)
    res.status(201).json({ "message": "you have posted in services route" })
}

export { GetHome, PostHome, GetServices, PostServices } 