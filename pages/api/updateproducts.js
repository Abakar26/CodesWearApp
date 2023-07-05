import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
    }
    res.status(200).json({ message: "Added Successfully" })

  } else {
    res.status(400).json({ error: "This method is not allowed here" })
  }
}

export default connectDb(handler)
