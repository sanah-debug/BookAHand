import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5B5FEF', primaryDark: '#4B4FCC', primaryLight: '#EEF0FF',
  background: '#F6F7FB', surface: '#FFFFFF', text: '#171923', muted: '#73788C',
  border: '#E5E7EB', success: '#10B981', danger: '#EF4444', warning: '#F59E0B',
  mutedLight: '#F1F2F6',
};

export const common = StyleSheet.create({
  flex: { flex: 1 },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 32 },
  title: { fontSize: 24, fontWeight: '800', color: colors.text },
  subtitle: { fontSize: 13, color: colors.muted, fontWeight: '600', lineHeight: 20 },
  card: { backgroundColor: colors.surface, borderRadius: 24, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, shadowOffset: { width: 0, height: 3 }, elevation: 2 },
  row: { flexDirection: 'row', alignItems: 'center' },
});
