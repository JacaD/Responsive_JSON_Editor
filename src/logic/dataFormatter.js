import _ from "lodash";

const formatJSONByKey = (data, key) => {
  let result = _.groupBy(data, function(element) {
    return element[key];
  });
  return result;
};

export default formatJSONByKey;
