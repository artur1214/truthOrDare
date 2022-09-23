import * as React from 'react';
import { RefObject } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../App';

export const navigationRef: RefObject<NavigationContainerRef<RootStackParamList>> = React.createRef<NavigationContainerRef<RootStackParamList>>();
// {<RouteName extends keyof RootStackParamList>(...args: keyof ParamList extends unknown ? (
//   undefined extends RootStackParamList[keyof ParamList] ? ([screen: keyof ParamList] |
//     [screen: keyof ParamList, params: RootStackParamList[keyof ParamList]]) :
//     [screen: keyof ParamList, params: RootStackParamList[keyof ParamList]]) : never): void,
//   <RouteName extends keyof RootStackParamList>(options: keyof ParamList extends unknown ?
//     ({key: string, params?: RootStackParamList[keyof ParamList], merge?: boolean} |
//       {name: keyof ParamList, key?: string, params: RootStackParamList[keyof ParamList], merge?: boolean})
//     : never): void}

export function global_navigate<RouteName extends keyof RootStackParamList>(
  ...args: // this first condition allows us to iterate over a union type
    // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
    // which will get our types all mixed up if a union RouteName is passed in.
    RouteName extends unknown
      ? // This condition checks if the params are optional,
      // which means it's either undefined or a union with undefined
      undefined extends RootStackParamList[RouteName]
        ?
        | [screen: RouteName] // if the params are optional, we don't have to provide it
        | [screen: RouteName, params: RootStackParamList[RouteName]]
        : [screen: RouteName, params: RootStackParamList[RouteName]]
      : never
): void  {
  navigationRef.current?.navigate(...args)
}
