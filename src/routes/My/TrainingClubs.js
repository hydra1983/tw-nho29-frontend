import React, { PureComponent } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { List, Card } from 'antd';

@connect(({ trainingClub, loading }) => ({
  list: trainingClub,
  loading: loading.models.training_club,
}))
export default class TrainingClubs extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'trainingClub/fetchList',
    });
  }

  viewTrainingClub = (id) => {
    this.props.dispatch(routerRedux.push({
      pathname:`/my/training-club`,
      search: `?clubId=${id}`,
    }));
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
              <Card hoverable title={item.name} onClick={() => this.viewTrainingClub(item.id)}>
                <div>{item.description}</div>
              </Card>
            </div>
          </List.Item>
        )}
      />
    );
  }
}
