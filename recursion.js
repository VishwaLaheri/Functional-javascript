function getDependencies(tree, result = []) {
  if (!tree.dependencies) return result;

  Object.keys(tree.dependencies).forEach(depName => {
    const dep = tree.dependencies[depName];
    const depString = `${depName}@${dep.version}`;

    if (!result.includes(depString)) {
      result.push(depString);
    }

    getDependencies(dep, result);
  });
  return result.sort();
}

module.exports = getDependencies;