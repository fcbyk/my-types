import { fcbyk } from '../types/index'

// 测试 Message 类型
const message: fcbyk.Message = {
    type: 'text',
    content: 'Hello World',
    loadingTime: 1000,
    time: Date.now(),
    role: 'me',
    status: 'completed'
}

// 测试 MessageType 类型
const messageType: fcbyk.MessageType = 'text' // 正确
// const wrongType: fcbyk.MessageType = 'wrong' // 错误：类型 '"wrong"' 不能赋值给类型 'MessageType'

// 测试 MessageRole 类型
const role: fcbyk.MessageRole = 'user' // 正确
// const wrongRole: fcbyk.MessageRole = 'admin' // 错误：类型 '"admin"' 不能赋值给类型 'MessageRole'

// 测试 FileContent 类型
const fileContent: fcbyk.FileContent = {
    fileName: 'test.pdf',
    fileSize: '1.5MB',
    fileType: 'application/pdf',
    fileUrl: 'https://example.com/test.pdf'
}

// 测试 NavContent 类型
const navContent: fcbyk.NavContent = {
    title: '首页',
    link: 'https://example.com',
    desc: '网站首页',
    icon: 'home'
}

// 测试 MessageList 类型
const messageList: fcbyk.MessageList = [
    {
        type: 'text',
        content: '第一条消息',
        loadingTime: 500,
        time: Date.now(),
        role: 'user',
        status: 'completed'
    },
    {
        type: 'image',
        content: 'https://example.com/image.jpg',
        loadingTime: 1000,
        time: Date.now(),
        role: 'me',
        status: 'completed'
    }
]
