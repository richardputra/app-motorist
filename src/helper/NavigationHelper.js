import {CommonActions} from '@react-navigation/native';

let _container;

function setContainer(container) {
  _container = container;
}

function reset(routeName, params) {
  _container.current.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    }),
  );
}

function navigate(routeName, params) {
  _container.current.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function navigateDeep(actions, routeName, params) {
  _container.current.dispatch(
    actions.reduceRight(
      () =>
        CommonActions.navigate({
          name: routeName,
          params: params,
        }),
      undefined,
    ),
  );
}

function getCurrentRoute() {
  if (!_container || !_container.state.nav) {
    return null;
  }

  return _container.state.nav.routes[_container.state.nav.index] || null;
}

export default {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute,
};
