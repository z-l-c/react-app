import Mock from 'mockjs';

const getData = Mock.mock({
  'list|1-100': [{
    'id|+1': 1,
    email: '@EMAIL',
  }],
});

const postData = Mock.mock({
  'list|1-100': [{
    'id|+1': 1,
    email: '@EMAIL',
  }],
});

// 拦截规则
Mock.mock('/api/get', 'get', () => getData);

Mock.mock('/api/post', 'post', () => postData);
