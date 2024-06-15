export default {
  root: ({ context }: any) => ({
    class: ['grow', { flex: context.nested }],
  }),
};
