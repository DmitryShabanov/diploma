export const nodesFavoriteColor = {
  border: '#bf9e00',
  background: '#fd3',
  highlight: {
    border: '#bf9e00',
    background: '#ffe76e',
  },
};

export const edgesColor = {
  color: '#317fe6',
  highlight: '#317fe6',
  inherit: false,
};

export const graphOptions = {
  layout: {
    hierarchical: {
      enabled: true,
      levelSeparation: 70,
      sortMethod: 'directed',
    },
  },
  edges: {
    color: edgesColor,
  },
  interaction: {
    dragNodes: false,
  },
  // physics: {
  //   enabled: false,
  // },
};
