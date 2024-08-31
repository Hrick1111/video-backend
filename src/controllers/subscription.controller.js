import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    const {userId} = req.user

    const subscription = await Subscription.findOne({ user: userId, channel: channelId });
    // toggle subscription
    if (subscription) {
        // If subscription exists, delete it
        await Subscription.deleteOne({ _id: subscription._id });
        res.status(200).json({ message: `Unsubscribed from channel ${channelId}` });
    } else {
        // If subscription does not exist, create it
        const newSubscription = new Subscription({ user: userId, channel: channelId });
        await newSubscription.save();
        res.status(200).json({ message: `Subscribed to channel ${channelId}` });
    }

})


// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const {channelId} = req.params
})

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.params
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}