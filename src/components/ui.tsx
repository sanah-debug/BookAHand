import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, common } from '../theme';
import { ProviderType } from '../types';

export function Stars({ rating, size = 12 }: { rating: number; size?: number }) {
  return <Text style={{ fontSize: size, letterSpacing: 1 }}>{[1,2,3,4,5].map(i => <Text key={i} style={{ color: i <= Math.round(rating) ? '#F59E0B' : '#E5E7EB' }}>★</Text>)}</Text>;
}

export function VerifiedBadge() { return <View style={s.verified}><Text style={s.verifiedText}>✓ Verified</Text></View>; }
export function AvailableBadge({available}:{available:boolean}) { return <View style={[s.available, {backgroundColor: available ? '#ECFDF5':'#FEF2F2'}]}><View style={[s.dot,{backgroundColor:available?colors.success:colors.danger}]} /><Text style={[s.availableText,{color:available?colors.success:colors.danger}]}>{available?'Available':'Busy'}</Text></View>; }

export function PageHeader({title,onBack,right}:{title:string;onBack?:()=>void;right?:React.ReactNode}) {
  return <View style={s.header}><Pressable onPress={onBack} style={s.headerButton}>{onBack ? <Text style={s.back}>‹</Text> : null}</Pressable><Text style={s.headerTitle}>{title}</Text><View style={s.headerButton}>{right}</View></View>;
}

export function Button({children,onPress,variant='primary',fullWidth=false,disabled=false}:{children:React.ReactNode;onPress?:()=>void;variant?:'primary'|'secondary'|'outline'|'ghost'|'danger';fullWidth?:boolean;disabled?:boolean}) {
 const map:any={primary:{backgroundColor:colors.primary},secondary:{backgroundColor:colors.primaryLight},outline:{backgroundColor:'transparent',borderWidth:2,borderColor:colors.primary},ghost:{backgroundColor:colors.mutedLight},danger:{backgroundColor:colors.danger}};
 const textColor=variant==='secondary'||variant==='outline'||variant==='ghost'? (variant==='outline'?colors.primary:colors.text) : '#fff';
 return <Pressable disabled={disabled} onPress={onPress} style={[s.button,map[variant],fullWidth&&{width:'100%'},disabled&&{opacity:.45}]}><Text style={[s.buttonText,{color:textColor}]}>{children}</Text></Pressable>;
}

export function Input({label,icon,...props}:any) { return <View style={s.inputWrap}>{label&&<Text style={s.label}>{label}</Text>}<View style={s.inputRow}>{icon&&<Text style={s.inputIcon}>{icon}</Text>}<TextInput {...props} placeholderTextColor={colors.muted} style={[s.input,icon&&{paddingLeft:0}]} /></View></View>; }

export function Card({children,onPress,style}:{children:React.ReactNode;onPress?:()=>void;style?:any}) { return <Pressable disabled={!onPress} onPress={onPress} style={[common.card,style]}>{children}</Pressable>; }

export function ProviderCard({provider,onPress,onBook}:{provider:ProviderType;onPress:()=>void;onBook?:()=>void}) {
 return <Card onPress={onPress} style={{marginBottom:12}}><View style={common.row}><View style={{position:'relative'}}><Image source={{uri:provider.avatar}} style={s.avatar}/>{provider.verified&&<View style={s.check}><Text style={{color:'#fff',fontSize:10,fontWeight:'900'}}>✓</Text></View>}</View><View style={{flex:1,marginLeft:12}}><View style={common.row}><View style={{flex:1}}><Text style={s.name}>{provider.name}</Text><Text style={s.profession}>{provider.profession}</Text></View><AvailableBadge available={provider.available}/></View><View style={[common.row,{marginTop:6}]}><Stars rating={provider.rating} size={11}/><Text style={s.smallBold}>{provider.rating}</Text><Text style={s.smallMuted}>({provider.reviews})</Text></View><Text style={s.smallMuted}>📍 {provider.distance||provider.location}  ·  ⏳ {provider.experience}</Text><View style={[common.row,{justifyContent:'space-between',marginTop:8}]}><Text style={s.price}>Rs. {provider.price.toLocaleString()}<Text style={s.smallMuted}>/{provider.priceUnit}</Text></Text>{onBook&&<Pressable onPress={onBook} style={s.bookSmall}><Text style={s.bookSmallText}>Book Now</Text></Pressable>}</View></View></View></Card>;
}

export function EmptyState({emoji,title,description,actionLabel,onAction}:{emoji:string;title:string;description:string;actionLabel?:string;onAction?:()=>void}) { return <View style={s.empty}><Text style={{fontSize:48}}>{emoji}</Text><Text style={s.emptyTitle}>{title}</Text><Text style={[common.subtitle,{textAlign:'center'}]}>{description}</Text>{actionLabel&&onAction&&<Button onPress={onAction}>{actionLabel}</Button>}</View>; }

const s=StyleSheet.create({
 header:{height:64,paddingHorizontal:18,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:colors.surface,borderBottomWidth:1,borderBottomColor:colors.border},headerButton:{width:38,height:38,alignItems:'center',justifyContent:'center'},back:{fontSize:34,color:colors.text,lineHeight:34},headerTitle:{fontSize:16,fontWeight:'800',color:colors.text},button:{minHeight:50,borderRadius:17,alignItems:'center',justifyContent:'center',paddingHorizontal:20,marginVertical:4},buttonText:{fontSize:14,fontWeight:'800'},inputWrap:{gap:7},label:{fontSize:13,fontWeight:'700',color:colors.text},inputRow:{height:52,backgroundColor:colors.mutedLight,borderRadius:17,paddingHorizontal:14,flexDirection:'row',alignItems:'center'},inputIcon:{fontSize:16,marginRight:9},input:{flex:1,fontSize:14,fontWeight:'600',color:colors.text},verified:{backgroundColor:'#EFF6FF',paddingHorizontal:7,paddingVertical:4,borderRadius:99},verifiedText:{fontSize:10,fontWeight:'800',color:'#2563EB'},available:{flexDirection:'row',alignItems:'center',paddingHorizontal:8,paddingVertical:4,borderRadius:99,gap:5},availableText:{fontSize:10,fontWeight:'800'},dot:{width:6,height:6,borderRadius:3},avatar:{width:60,height:60,borderRadius:18,backgroundColor:colors.mutedLight},check:{position:'absolute',right:-2,bottom:-2,width:20,height:20,borderRadius:10,backgroundColor:'#3B82F6',alignItems:'center',justifyContent:'center'},name:{fontSize:14,fontWeight:'800',color:colors.text},profession:{fontSize:12,fontWeight:'600',color:colors.muted,marginTop:2},smallBold:{fontSize:11,fontWeight:'700',color:colors.text,marginLeft:4},smallMuted:{fontSize:11,fontWeight:'600',color:colors.muted,marginTop:5},price:{fontSize:13,fontWeight:'800',color:colors.primary},bookSmall:{backgroundColor:colors.primary,paddingHorizontal:12,paddingVertical:7,borderRadius:12},bookSmallText:{color:'#fff',fontSize:11,fontWeight:'800'},empty:{alignItems:'center',justifyContent:'center',padding:45,gap:10},emptyTitle:{fontSize:16,fontWeight:'800',color:colors.text},
});
