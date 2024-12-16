import mongoose from "mongoose";


const tourSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  availableDates : [String],
  image: String,
});

const TourPackage =  mongoose.model("package", tourSchema);

export default TourPackage;
