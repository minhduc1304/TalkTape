Records = new FS.Collection("records", {
  stores: [new FS.Store.FileSystem("records", {path: "~/uploads"})]
});

  Records.allow({
      insert: function(userId, file) {
          return true;
      },
      update: function(userId, file, fields, modifier) {
          return true;
      },
      remove: function(userId, file) {
          return true;
      },
      download: function() {
          return true;
      }
  });
