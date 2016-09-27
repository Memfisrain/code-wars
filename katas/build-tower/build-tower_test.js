fdescribe('build tower', function() {
  it('should return tower with specified number of floors', function() {
    expect(buildTower(3)).toEqual([
      '  *  ',
      ' *** ',
      '*****'
    ]);
    expect(buildTower(5)).toEqual([
      '     *     ',
      '    ***    ',
      '   *****   ',
      '  *******  ',
      ' ********* ',
      '***********'
    ]);
  });
  
  it('should return null if number of floors is zero or not a number', function() {
    expect(buildTower(0)).toEqual(null);
    expect(buildTower({})).toEqual(null);
    expect(buildTower(true)).toEqual(null);
  });
});
