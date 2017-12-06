export type Maybe<T> = T | undefined | null;

export enum MessageType {
  Location = "LOCATION",
  Text = "TEXT",
  Picture = "PICTURE"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  users?: Maybe<User[]>;

  chats?: Maybe<Chat[]>;

  chat?: Maybe<Chat>;
}

export interface User {
  id: number;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  phone?: Maybe<string>;
}

export interface Chat {
  id: number;

  name?: Maybe<string>;

  picture?: Maybe<string>;

  allTimeMembers: User[];

  listingMembers: User[];

  actualGroupMembers: User[];

  admins?: Maybe<User[]>;

  owner?: Maybe<User>;

  messages: (Maybe<Message>)[];

  unreadMessages: number;

  isGroup: boolean;
}

export interface Message {
  id: number;

  sender: User;

  chat: Chat;

  content: string;

  createdAt: string;

  type: number;

  recipients: Recipient[];

  holders: User[];

  ownership: boolean;
}

export interface Recipient {
  user: User;

  message: Message;

  chat: Chat;

  receivedAt?: Maybe<string>;

  readAt?: Maybe<string>;
}

// ====================================================
// Arguments
// ====================================================

export interface ChatQueryArgs {
  chatId: number;
}
export interface MessagesChatArgs {
  amount?: Maybe<number>;
}

import { GraphQLResolveInfo } from "graphql";

import { Chat, Message, Recipient } from "./db";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    users?: UsersResolver<Maybe<User[]>, TypeParent, Context>;

    chats?: ChatsResolver<Maybe<Chat[]>, TypeParent, Context>;

    chat?: ChatResolver<Maybe<Chat>, TypeParent, Context>;
  }

  export type UsersResolver<
    R = Maybe<User[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ChatsResolver<
    R = Maybe<Chat[]>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ChatResolver<
    R = Maybe<Chat>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ChatArgs>;
  export interface ChatArgs {
    chatId: number;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<number, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    picture?: PictureResolver<Maybe<string>, TypeParent, Context>;

    phone?: PhoneResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<R = number, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<
    R = Maybe<string>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PictureResolver<
    R = Maybe<string>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = Maybe<string>,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ChatResolvers {
  export interface Resolvers<Context = {}, TypeParent = Chat> {
    id?: IdResolver<number, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    picture?: PictureResolver<Maybe<string>, TypeParent, Context>;

    allTimeMembers?: AllTimeMembersResolver<User[], TypeParent, Context>;

    listingMembers?: ListingMembersResolver<User[], TypeParent, Context>;

    actualGroupMembers?: ActualGroupMembersResolver<
      User[],
      TypeParent,
      Context
    >;

    admins?: AdminsResolver<Maybe<User[]>, TypeParent, Context>;

    owner?: OwnerResolver<Maybe<User>, TypeParent, Context>;

    messages?: MessagesResolver<(Maybe<Message>)[], TypeParent, Context>;

    unreadMessages?: UnreadMessagesResolver<number, TypeParent, Context>;

    isGroup?: IsGroupResolver<boolean, TypeParent, Context>;
  }

  export type IdResolver<R = number, Parent = Chat, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PictureResolver<
    R = Maybe<string>,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AllTimeMembersResolver<
    R = User[],
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ListingMembersResolver<
    R = User[],
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ActualGroupMembersResolver<
    R = User[],
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AdminsResolver<
    R = Maybe<User[]>,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = Maybe<User>,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessagesResolver<
    R = (Maybe<Message>)[],
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context, MessagesArgs>;
  export interface MessagesArgs {
    amount?: Maybe<number>;
  }

  export type UnreadMessagesResolver<
    R = number,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IsGroupResolver<
    R = boolean,
    Parent = Chat,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MessageResolvers {
  export interface Resolvers<Context = {}, TypeParent = Message> {
    id?: IdResolver<number, TypeParent, Context>;

    sender?: SenderResolver<User, TypeParent, Context>;

    chat?: ChatResolver<Chat, TypeParent, Context>;

    content?: ContentResolver<string, TypeParent, Context>;

    createdAt?: CreatedAtResolver<string, TypeParent, Context>;

    type?: TypeResolver<number, TypeParent, Context>;

    recipients?: RecipientsResolver<Recipient[], TypeParent, Context>;

    holders?: HoldersResolver<User[], TypeParent, Context>;

    ownership?: OwnershipResolver<boolean, TypeParent, Context>;
  }

  export type IdResolver<R = number, Parent = Message, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type SenderResolver<
    R = User,
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ChatResolver<R = Chat, Parent = Message, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type ContentResolver<
    R = string,
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<
    R = string,
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = number,
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type RecipientsResolver<
    R = Recipient[],
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type HoldersResolver<
    R = User[],
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type OwnershipResolver<
    R = boolean,
    Parent = Message,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace RecipientResolvers {
  export interface Resolvers<Context = {}, TypeParent = Recipient> {
    user?: UserResolver<User, TypeParent, Context>;

    message?: MessageResolver<Message, TypeParent, Context>;

    chat?: ChatResolver<Chat, TypeParent, Context>;

    receivedAt?: ReceivedAtResolver<Maybe<string>, TypeParent, Context>;

    readAt?: ReadAtResolver<Maybe<string>, TypeParent, Context>;
  }

  export type UserResolver<
    R = User,
    Parent = Recipient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = Message,
    Parent = Recipient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ChatResolver<
    R = Chat,
    Parent = Recipient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ReceivedAtResolver<
    R = Maybe<string>,
    Parent = Recipient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ReadAtResolver<
    R = Maybe<string>,
    Parent = Recipient,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers {
  Query?: QueryResolvers.Resolvers;
  User?: UserResolvers.Resolvers;
  Chat?: ChatResolvers.Resolvers;
  Message?: MessageResolvers.Resolvers;
  Recipient?: RecipientResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
