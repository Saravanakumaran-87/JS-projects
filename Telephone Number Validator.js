function telephoneCheck(str) {
    let maching=(/^[^(]?\d{3}[-]\d{3}[-]\d{4}|^1?[\s]?[(]\d{3}[)][\s]?\d{3}[-]\d{4}|^\d{10}$|^1[\s]\d{3}[-\s]\d{3}[-\s]\d{4}/gi).test(str);
    return maching;
  }
  console.log(telephoneCheck("555-555-5555"));