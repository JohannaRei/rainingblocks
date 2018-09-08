const shapes = {
  l: {
    color: 'red',
    top: {
      id: 'lt',
      matrix: [
        [1, 1, 1],
        [1, 0, 0],
      ],
    },
    left: {
      id: 'll',
      matrix: [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
    },
    right: {
      id: 'lr',
      matrix: [
        [1, 1],
        [0, 1],
        [0, 1],
      ],
    },
    bottom: {
      id: 'lb',
      matrix: [
        [0, 0, 1],
        [1, 1, 1],
      ],
    },
  },
  j: {
    color: 'orange',
    top: {
      id: 'jt',
      matrix: [
        [1, 1, 1],
        [0, 0, 1],
      ],
    },
    left: {
      id: 'jl',
      matrix: [
        [1, 1],
        [1, 0],
        [1, 0],
      ],
    },
    right: {
      id: 'jr',
      matrix: [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
    },
    bottom: {
      id: 'jb',
      matrix: [
        [0, 0, 1],
        [1, 1, 1],
      ],
    },
  },
  t: {
    color: 'green',
    top: {
      id: 'tt',
      matrix: [
        [1, 1, 1],
        [0, 1, 0],
      ],
    },
    left: {
      id: 'tl',
      matrix: [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
    },
    right: {
      id: 'tr',
      matrix: [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
    },
    bottom: {
      id: 'tb',
      matrix: [
        [0, 1, 0],
        [1, 1, 1],
      ],
    },
  },
  i: {
    color: 'blue',
    top: {
      id: 'it',
      matrix: [
        [1, 1, 1, 1],
      ],
    },
    right: {
      id: 'ir',
      matrix: [
        [1],
        [1],
        [1],
        [1],
      ],
    },
    left: {
      id: 'il',
      matrix: [
        [1],
        [1],
        [1],
        [1],
      ],
    },
    bottom: {
      id: 'ib',
      matrix: [
        [1, 1, 1, 1],
      ],
    },
  },
  o: {
    color: 'purple',
    top: {
      id: 'ot',
      matrix: [
        [1, 1],
        [1, 1],
      ],
    },
    right: {
      id: 'or',
      matrix: [
        [1, 1],
        [1, 1],
      ],
    },
    left: {
      id: 'ol',
      matrix: [
        [1, 1],
        [1, 1],
      ],
    },
    bottom: {
      id: 'ob',
      matrix: [
        [1, 1],
        [1, 1],
      ],
    },
  },
};

export default shapes;
