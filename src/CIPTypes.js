const CIPTypes = {
  160: [88, "STRUCT", "B"],
  193: [1, "BOOL", "?"],
  194: [1, "SINT", "b"],
  195: [2, "INT", "h"],
  196: [4, "DINT", "i"],
  197: [8, "LINT", "q"],
  198: [1, "USINT", "B"],
  199: [2, "UINT", "H"],
  200: [4, "UDINT", "I"],
  201: [8, "LWORD", "Q"],
  202: [4, "REAL", "f"],
  203: [8, "LREAL", "d"],
  211: [4, "DWORD", "I"],
  218: [0, "STRING", "B"]
};

exports.default = CIPTypes;
module.exports = CIPTypes;