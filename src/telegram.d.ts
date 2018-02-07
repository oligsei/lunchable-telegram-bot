export namespace Telegram {
    export interface Update {
        update_id: number; // The update‘s unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you’re using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
        message?: Message; // New incoming message of any kind — text, photo, sticker, etc.
        edited_message?: Message; // New version of a message that is known to the bot and was edited
        channel_post?: Message; //  New incoming channel post of any kind — text, photo, sticker, etc.
        edited_channel_post?: Message; // New version of a channel post that is known to the bot and was edited
        inline_query?: any; // New incoming inline query
        chosen_inline_result?: any; // The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
        callback_query?: any; // New incoming callback query
        shipping_query?: any; // New incoming shipping query. Only for invoices with flexible price
        pre_checkout_query?: any; // New incoming pre-checkout query. Contains full information about checkout
    }

    export interface User {
        id: number; // Unique identifier for this user or bot
        is_bot: boolean; // True, if this user is a bot
        first_name: string; // User‘s or bot’s first name
        last_name?: string; // Optional. User‘s or bot’s last name
        username?: string; // Optional. User‘s or bot’s username
        language_code?: string; // Optional. IETF language tag of the user's language
    }

    export interface Chat {
        id: number; // Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
        type: string; // Type of chat, can be either “private”, “group”, “supergroup” or “channel”
        title: string; // Optional. Title, for supergroups, channels and group chats
        username: string; // Optional. Username, for private chats, supergroups and channels if available
        first_name: string; // Optional. First name of the other party in a private chat
        last_name: string; // Optional. Last name of the other party in a private chat
        all_members_are_administrators?: boolean; // Optional. True if a group has ‘All Members Are Admins’ enabled.
        photo?: any // ChatPhoto Optional. Chat photo. Returned only in getChat.
        description?: string; // Optional. Description, for supergroups and channel chats. Returned only in getChat.
        invite_link?: string; // Optional. Chat invite link, for supergroups and channel chats. Returned only in getChat.
        pinned_message?: any; // Message Optional. Pinned message, for supergroups and channel chats. Returned only in getChat.
        sticker_set_name: string; // Optional. For supergroups, name of group sticker set. Returned only in getChat.
        can_set_sticker_set?: boolean; // Optional. True, if the bot can change the group sticker set. Returned only in getChat.
    }

    export interface Message {
        message_id: number; // Unique message identifier inside this chat
        from?: User; // Sender, empty for messages sent to channels
        date: number; // Date the message was sent in Unix time
        chat: Chat; //Conversation the message belongs to
        forward_from?: User // For forwarded messages, sender of the original message
        forward_from_chat?: Chat; // For messages forwarded from channels, information about the original channel
        forward_from_message_id?: number; // For messages forwarded from channels, identifier of the original message in the channel
        forward_signature?: string // For messages forwarded from channels, signature of the post author if present
        forward_date?: number; // For forwarded messages, date the original message was sent in Unix time
        reply_to_message?: Message // For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
        edit_date?: number; // Date the message was last edited in Unix time
        media_group_id?: string // The unique identifier of a media message group this message belongs to
        author_signature?: string // Signature of the post author for messages in channels
        text?: string // For text messages, the actual UTF-8 text of the message, 0-4096 characters.
        entities?: any[]; // Array of MessageEntity	Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
        caption_entities?: any[]; //	Array of MessageEntity	Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
        audio?: any; //	Audio	Optional. Message is an audio file, information about the file
        document?: any; //	Document	Optional. Message is a general file, information about the file
        game?: any; //	Game	Optional. Message is a game, information about the game. More about games »
        photo?: any[]; //	Array of PhotoSize	Optional. Message is a photo, available sizes of the photo
        sticker?: any; //	Sticker	Optional. Message is a sticker, information about the sticker
        video?: any; //	Video	Optional. Message is a video, information about the video
        voice?: any; //	Voice	Optional. Message is a voice message, information about the file
        video_note: any; //	VideoNote	Optional. Message is a video note, information about the video message
        caption?: string // Caption for the audio, document, photo, video or voice, 0-200 characters
        contact?: any; //	Contact	Optional. Message is a shared contact, information about the contact
        location?: any; //	Location	Optional. Message is a shared location, information about the location
        venue?: any; //	Venue	Optional. Message is a venue, information about the venue
        new_chat_members?: User[]; //	Array of User	Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
        left_chat_member?: User; // A member was removed from the group, information about them (this member may be the bot itself)
        new_chat_title?: string // A chat title was changed to this value
        new_chat_photo?: any[]; //	Array of PhotoSize	Optional. A chat photo was change to this value
        delete_chat_photo?: true; // Service message: the chat photo was deleted
        group_chat_created?: true; // Service message: the group has been created
        supergroup_chat_created?: true; // Service message: the supergroup has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
        channel_chat_created?: true; // Service message: the channel has been created. This field can‘t be received in a message coming through updates, because bot can’t be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
        migrate_to_chat_id?: number; // The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
        migrate_from_chat_id?: number; // The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.
        pinned_message?: Message; //	Message	Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
        invoice?: any; //	Invoice	Optional. Message is an invoice for a payment, information about the invoice. More about payments »
        successful_payment?: any; //	SuccessfulPayment	Optional. Message is a service message about a successful payment, information about the payment.
    }
}
