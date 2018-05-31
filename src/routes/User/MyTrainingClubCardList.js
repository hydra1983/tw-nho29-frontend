import React, { PureComponent } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { List, Card } from 'antd';

@connect(({ trainingClub, loading }) => ({
  list: trainingClub,
  loading: loading.models.training_club,
}))
export default class MyTrainingClubCardList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'trainingClub/fetch',
    });
  }

  viewTrainingClub = () => {
    console.log('viewTrainingClub');
    this.props.dispatch(routerRedux.push('/apply'));
  };

  render() {
    const { list: { list }, loading } = this.props;

    return (
      <List
        rowKey="id"
        grid={{ gutter: 20, column: 3 }}
        loading={loading}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <div>
              <Card hoverable title={item.name} onClick={this.viewTrainingClub}>
                <div>{item.description}</div>
              </Card>
            </div>
          </List.Item>
        )}
      />
    );
  }
}
