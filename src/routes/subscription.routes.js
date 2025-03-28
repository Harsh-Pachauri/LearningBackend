import { Router } from "express";
import {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
} from "../controllers/subscription.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Toggle subscription (subscribe/unsubscribe)
router.route("/toggle/:channelId").post(verifyJWT, toggleSubscription);

// Get subscribers of a channel
router.route("/subscribers/:channelId").get(verifyJWT, getUserChannelSubscribers);

// Get channels a user has subscribed to
router.route("/subscriptions/:subscriberId").get(verifyJWT, getSubscribedChannels);

export default router;
