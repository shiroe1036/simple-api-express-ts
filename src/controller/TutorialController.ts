import mongoose from "mongoose";
import mongodb from "mongodb";
import { TutorialSchema } from "../model/Tutorials";

const Tutorial = mongoose.model("Tutorial", TutorialSchema);

const ObjectID = mongoose.Types.ObjectId;

export const createTuto = async (req: any, res: any): Promise<any> => {
  const tutoCreate = new Tutorial(req.body);
  try {
    const tuto = await tutoCreate.save();

    res.status(200).json({
      error: false,
      message: tuto,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

export const FindAll = async (req: any, res: any): Promise<any> => {
  try {
    const tutorials = await Tutorial.find();

    res.status(200).json({
      error: false,
      message: tutorials,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

export const FindOne = async (req: any, res: any): Promise<any> => {
  try {
    const tutorial = await Tutorial.findOne({ _id: req.params.tutorial });

    res.status(200).json({
      error: false,
      message: tutorial,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

export const update = async (req: any, res: any): Promise<any> => {
  try {
    const tutorial = await Tutorial.findOneAndUpdate(
      { _id: req.params.tutorial },
      req.body,
      {
        new: true,
        useFindAndModify: true,
      }
    );

    res.status(200).json({
      error: false,
      message: tutorial,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

export const Delete = async (req: any, res: any): Promise<any> => {
  try {
    const tutorial = await Tutorial.deleteOne({ _id: req.params.tutorial });

    res.status(200).json({
      error: false,
      message: tutorial,
    });
  } catch (error: any) {
    return res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};
