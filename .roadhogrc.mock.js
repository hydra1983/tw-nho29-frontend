import { delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (password === '123456' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    $desc: '获取当前用户接口',
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      notifyCount: 12,
    },
  },
  'GET /api/my/training-clubs': {
    $desc: '获取当前用户的训练营',
    $body: [
      {
        id: 1,
        name: '10小时入门大数据',
        description:
          '时下引领着技术变革的非“大数据”莫属，本课程带你从0基础开始上手，让你全面掌握Hadoop开发的核心技能：HDFS 、YARN 、MapReduce的搭建及框架的应用，了解最火爆最前沿的大数据技术发展趋势，快速入门大数据！',
      },
      {
        id: 2,
        name: '以慕课网日志分析为例 进入大数据 Spark SQL 的世界',
        description:
          '本课程以“慕课网日志分析”这一大数据应用案例为主线，使用慕课网真实日志，以目前主流的、最新的Spark稳定版2.1.x为基础，依次介绍相关的大数据技术：Hadoop、Hive、Spark SQL，涉及数据清洗、统计存储、处理入库以及数据可视化（Echarts、Zeppelin），最终会形成一个完整的大数据项目。',
      },
      {
        id: 3,
        name: 'Spark Streaming实时流处理项目实战',
        description:
          '本课程从实时数据产生和流向的各个环节出发，通过集成主流的分布式日志收集框架Flume、分布式消息队列Kafka、分布式列式数据库HBase、及当前最火爆的Spark Streaming打造实时流处理项目实战，让你掌握实时处理的整套处理流程，达到大数据中级研发工程师的水平！',
      },
      {
        id: 4,
        name: '基于Storm构建实时热力分布项目实战',
        description:
          'Storm是实时流处理领域的一柄利器，本课程采用最新的Storm版本1.1.0，从0开始由浅入深系统讲解，深入Storm内部机制，掌握Storm整合周边大数据框架的使用，从容应对大数据实时流处理！',
      },
    ],
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
};

export default (noProxy ? {} : delay(proxy, 1000));
