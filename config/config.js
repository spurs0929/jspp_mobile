const URL = {
  TX_CLASS: '//ke.qq.com/course',
  IMG_BASE: '//jsimage.jsplusplus.xyz',
  API_BASE_URL: process.env.NODE_ENV === 'production'
                                      ? 'http://m.jsplusplus.xyz/'
                                      : 'http://localhost:3008/'    
}

const PULL_DOWN_TEXT = {
  ORIGIN: '重新加載',
  PULLING: '正在加載中...',
  FINISHED: '加載完成'
}

export {
  URL,
  PULL_DOWN_TEXT
}