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
  physics: {
    enabled: false,
  },
};
