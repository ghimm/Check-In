'use strict';

var config = {
    // TODO Add Application ID
    appId : 'amzn1.ask.skill.442ebd8d-1a2c-4ea1-8f55-cb190942e241',
    // TODO Add an appropriate welcome message.
    welcome_message : 'Welcome to Check-in',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : true,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
        'highlights' : 'http://vietnamnews.vn/rss/domestic-press-highlights.rss',
        'special reports' : 'http://english.vietnamnet.vn/rss/special-reports.rss',
        'society' : 'http://vietnamnews.vn/rss/society.rss',
        'business' : 'http://english.vietnamnet.vn/rss/business.rss'
    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : 'myfeedskills3bucket',
    dynamoDBTableName : 'myFeedSkillBucket',
    dynamoDBRegion : 'us-east-1'
};

module.exports = config;