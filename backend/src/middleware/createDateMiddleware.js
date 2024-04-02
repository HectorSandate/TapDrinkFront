export const createDateMiddleware = function (schema, options) {
    schema.pre('save', function (next) {
      if (!this.isModified('createdAt')) {
        this.createdAt = new Date();
      }
      next();
    });
  };
  
  export const deactivateDateMiddleware = function (schema, options) {
    schema.pre('findOneAndUpdate', function (next) {
      this.set({ deactivatedAt: new Date() });
      next();
    });
  };