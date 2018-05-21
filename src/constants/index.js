export const nodeSelectedColor = {
  border: '#bf9e00',
  background: '#fd3',
  highlight: {
    border: '#bf9e00',
    background: '#ffe76e',
  },
};

export const nodeInsertedColor = {
  border: '#2bab00',
  background: '#3ffa00',
  highlight: {
    border: '#2bab00',
    background: '#69ff36',
  },
};

export const nodeRemovedColor = {
  border: '#ab0000',
  background: '#e60000',
  highlight: {
    border: '#ab0000',
    background: '#ff3535',
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
  autoResize: true,
  // physics: {
  //   enabled: false,
  // },
};
